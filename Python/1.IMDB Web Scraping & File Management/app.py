from matplotlib.font_manager import json_dump, json_load
import requests as rq
from bs4 import BeautifulSoup
import pandas as pd

# App Function


def app():

    # Variables
    titleList, yearList, ratingList = [], [], []

    # Web Scrap
    url = 'https://www.imdb.com/chart/top'
    html = rq.get(url).content
    soup = BeautifulSoup(html, "html.parser")
    findList = soup.find(
        'tbody', {'class': 'lister-list'}).find_all('tr')
    welcome = int(input('Welcome to my IMDB top rated movies app. Please select and option for your desire.\n\n1- A certain movie from the list by rated number.\n2- Check a movie by its name if it is on the list.\n3- Top rated movies with desired amounth(1-250).\n4- Full list.\n5- Quite\nEnter: '))
    fullList = {'Title': titleList, 'Released': yearList, 'Rating': ratingList}

    # Loop to get movies
    for td in findList:
        titleColumn = td.find('td', {'class': 'titleColumn'})
        title = titleColumn.find('a').text
        year = titleColumn.find('span').text.strip('()')
        rating = td.find('td', {'class': 'ratingColumn imdbRating'}).find(
            'strong').text
        titleList.append(title)
        yearList.append(year)
        ratingList.append(rating)

    # DataFrame
    df = pd.DataFrame.from_dict(fullList)
    df.index += 1
    if welcome == 1:
        while True:
            name = input('Please enter the title of the movie: ')
            # Find The Title from Column
            result = df[df['Title'] == name][[
                'Title', 'Released', 'Rating']]
            # Check If The Name Is Correct
            if result.index.size > 0:
                # File Handling
                df = result
                df.to_excel(f'{name}.xlsx')
                break
            else:
                result = int(input(
                    f'{name} is not in IMDB Top 250 list.\n1- Go main menu\n2- Enter a new title\nEnter: '))
                if result == 1:
                    break
                elif result == 2:
                    continue
                else:
                    print('Choose between 1-2 options.')
    elif welcome == 2:
        pass
    elif welcome == 3:
        pass
    elif welcome == 4:
        pass
    elif welcome == 5:
        pass
    else:
        pass


# limit = int(input('Hello! I am a program to bring you the top rated movies from IMDB. Please enter a number between 1-250.\nEnter:'))
# Try & Except
while True:
    try:
        app()
    except:
        print('Error')
        # Delete this later
        break


# Create DataFrame
# fullList = {'Title': titleList, 'Released': yearList, 'Rating': ratingList}
# df = pd.DataFrame.from_dict(fullList)
# df.index += 1

# File Handling
# df.to_excel(f'IMDB_TOP_RATED_{limit}_MOVIES.xlsx')
# print(df)
