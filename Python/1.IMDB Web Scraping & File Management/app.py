from matplotlib.font_manager import json_dump, json_load
import requests as rq
from bs4 import BeautifulSoup
import pandas as pd

#Variables
titleList, yearList, ratingList = [], [], []

#Web Scrap
url = 'https://www.imdb.com/chart/top'
html = rq.get(url).content
soup = BeautifulSoup(html,"html.parser")
limit = int(input('Hello! I am a program to bring you the top rated movies from IMDB. Please enter a number between 1-250.\nEnter:'))
findList = soup.find('tbody',{'class':'lister-list'}).find_all('tr',limit=limit)

#Loop to get movies
for td in findList:
    titleColumn = td.find('td',{'class':'titleColumn'})
    title = titleColumn.find('a').text
    year = titleColumn.find('span').text.strip('()')
    rating = td.find('td', {'class': 'ratingColumn imdbRating'}).find('strong').text
    titleList.append(title)
    yearList.append(year)
    ratingList.append(rating)

#Create DataFrame
fullList = {'Title': titleList,'Released':yearList,'Rating':ratingList}
df = pd.DataFrame.from_dict(fullList)

#File Handling
df.to_excel(f'IMDB_TOP_RATED_{limit}_MOVIES.xlsx')
print(df)