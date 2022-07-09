import requests as rq
from bs4 import BeautifulSoup
import pandas as pd
import os

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
    welcome = int(input('Welcome to my IMDB top rated movies app. Please select and option for your desire.\n\n1- Check a movie by its name if it is on the list.\n2- A certain movie from the list by rated number.\n3- Top rated movies with desired amounth(1-250).\n4- Full list.\n5- Quite\nEnter: '))
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
        # Loop The Option
        while True:
            name = input('Please enter the title of the movie: \n')
            # Find The Title from Column
            result = df[df['Title'] == name][[
                'Title', 'Released', 'Rating']]
            # Check If The Name Is Correct
            if result.index.size > 0:
                # File Handling
                result.to_excel(f'{name}.xlsx')   
                # Open The Excel File
                os.system(f'start excel.exe {name}.xlsx')
                break
            else:
                result = int(input(
                    f'{name} is not in IMDB Top 250 list.\n1- Go to main menu\n2- Enter a new title\nEnter: \n'))
                if result == 1:
                    break
                elif result == 2:
                    pass
                else:
                    print(
                        f'There is no option for {result}. Going back to main menu.\n')
    elif welcome == 2:
        while True:
            try:
                rank = int(
                    input('Please enter the rank of the movie(1-250): \n'))
                if 250 >= rank > 0:
                    result = df[df['Title'].index == rank][[
                        'Title', 'Released', 'Rating']]
                    result.to_excel(f'IMDB_NUMBER_{rank}.xlsx')
                    os.system(f'start excel.exe IMDB_NUMBER_{rank}.xlsx')
                    break
                else:
                    result = int(input(
                        'The rank number have to be between 1-250.\n1- Go to main menu\n2- Enter a rank again\nEnter: \n'))
                    if result == 1:
                        break
                    elif result == 2:
                        pass
                    else:
                        print(f'There is no option for {result}. Going back to main menu.\n')
            except ValueError:
                print('Please only use numbers.\n')
    elif welcome == 3:
        while True:
            try:
                limit = int(
                    input('Enter a number between 1-250 to get that top list: \n'))
                if 250 >= limit > 0:
                    result = df[0:limit]
                    result.to_excel(f'IMDB_TOP_{limit}_MOVIES.xlsx')
                    os.system(f'start excel.exe IMDB_TOP_{limit}_MOVIES.xlsx')
                    break
                else:
                    result = int(input(
                        'Desired movie list can only be between 1-250.\n1- Go to main menu\n2- Use another number\nEnter: \n'))
                    if result == 1:
                        break
                    elif result == 2:
                        pass
                    else:
                        print(
                            f'There is no option for {result}. Going back to main menu.\n')
            except ValueError:
                print('Please only use numbers.\n')
    elif welcome == 4:
        df.to_excel('IMDB_TOP_250_MOVIES.xlsx')
        os.system('start excel.exe IMDB_TOP_250_MOVIES.xlsx')
    elif welcome == 5:
        raise Exception('Leaving IMDB app. Come back soon!\n')
    else:
        print('Please only use numbers between 1-5 to reach sub-menu.\n')


# Try & Except
while True:
    try:
        app()
    except Exception as ex:
        print(ex)
        break