import json

with open('countries') as file:
    countries = file.readlines()
    countries = [country.strip() for country in countries]
    to_dump = {'countries': countries}
    with open('countries.json','w') as writer:
        json.dump(to_dump,writer)