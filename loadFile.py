import dwdatareader as dw
import numpy as np
import pandas
import fast_calculations
import json

def loadChannelList(file):
    try:
        with dw.open(file) as dataFile:
            channelList = [channel for channel in dataFile
                        if not 'CAN' in dataFile[channel].channel_index]
        return channelList

    except ValueError:
        pass

def loadFile(file):
    try:
        with dw.open(file) as dataFile:
            channelList = [channel for channel in dataFile
                        if not 'CAN' in dataFile[channel].channel_index]
            df = dataFile.dataframe(channelList)
        return df

    except ValueError:
        pass

with open('testFile.json', 'r') as file:
    data = json.load(file)
    fileName = data["fileName"]
    exponents = data["exponents"]
    loadChannel = data["loadChannel"]
    revChannel = data["revChannel"]

channelList = loadChannelList(fileName)

# Convert channel list into JSON
# File name is channelList.json
with open("channelList.json", "w") as final:
	json.dump(channelList, final)

df = loadFile(fileName)

load = df[loadChannel].to_numpy()
revs = df[revChannel].to_numpy()


torque_smoothed = abs(np.array(load))  
rev_count = np.array(revs)       

torque_smoothed = np.nan_to_num(torque_smoothed, nan=0.0)  # Replace NaN with 0
rev_count = np.nan_to_num(rev_count, nan=0.0)             # Replace NaN with 0

results = fast_calculations.calculate(torque_smoothed, rev_count, exponents)
print(results)
