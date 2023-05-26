import numpy as np
import pandas as pd
from sklearn.cluster import KMeans
from sklearn.metrics.pairwise import euclidean_distances
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

# Cargar el conjunto de datos
datos_recetas = pd.read_csv('./epi_r.csv')
datos_recetas = datos_recetas[['calories', 'protein', 'title']].dropna()
datos_recetas = datos_recetas[0:1000]

app = FastAPI()

app.add_middleware(
  CORSMiddleware,
  allow_origins=["*"],
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"]
)

class Recipe(BaseModel):
  _id: int
  title: str
  calories: int
  protein: int


@app.get("/recipes/{protein}/{calories}")

def read_root(calories: int, protein: int):

  # Dividir los datos en características (calorías y proteínas)
  X = datos_recetas[['calories', 'protein']]

  # Entrenar el modelo de clustering K-means
  modelo = KMeans(n_clusters=10)
  modelo.fit(X)

  calorias = calories
  proteinas = protein

  etiqueta = modelo.predict([[calorias, proteinas]])

  # Obtener los índices de las recetas en el cluster más cercano
  indices_recetas = X[modelo.labels_ == etiqueta[0]].index

  # Calcular las distancias euclidianas entre el punto dado y las recetas en el cluster más cercano
  distancias = euclidean_distances(X.loc[indices_recetas], [[calorias, proteinas]])

  # Obtener los nombres de las recetas en el cluster más cercano, ordenados por distancia ascendente

  index_recipes = distancias.argsort(axis=0).ravel()[:5]

  recetas_recomendadas = [datos_recetas.loc[i, 'title'] for i in indices_recetas[index_recipes]]

  recommended_recipes = []

  for i in range(len(recetas_recomendadas)):
    # Buscar en el dataset de informacion el dato con ese titulo.
    recipe = datos_recetas[datos_recetas['title'].str.contains(recetas_recomendadas[i])]

    # Crear una nueva instancia de Recipe con los datos encontrados
    new_recipe = Recipe(
      calories = recipe.iloc[0]['calories'],
      protein = recipe.iloc[0]['protein'],
      title = recipe.iloc[0]['title'],
      _id = index_recipes[i]
    )

    recommended_recipes.append(new_recipe)

  return {"recommended_recipes": recommended_recipes}

