import datetime

# This is a test file to show the datetime command in python

date = datetime.datetime.now().strftime( "%d.%m.%Y %H:%M Uhr" )
print(f"Hello world! :)  \n  Date and time right now are:  {date} ")