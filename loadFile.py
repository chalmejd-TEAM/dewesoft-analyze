import dwdatareader as dw
import numpy as np
import pandas
import fast_calculations
import json

def loadFile(file):
    try:
        with dw.open(file) as dataFile:
            channelList = [channel for channel in dataFile
                        if not 'CAN' in dataFile[channel].channel_index]
            df = dataFile.dataframe(channelList)
        print(dataFile.info)
        return df

    except ValueError:
        pass

with open('testFile.json', 'r') as file:
    data = json.load(file)
    fileName = data["fileName"]
    exponents = data["exponents"]
    forward = data["forward"]

df = loadFile(fileName)

load = df['Combined Load'].to_numpy()
revs = df['CNT 1/Raw_Count'].to_numpy()


# Example usage
torque_smoothed = np.array(load)  # Replace with your data
rev_count = np.array(revs)        # Replace with your data

torque_smoothed = np.nan_to_num(torque_smoothed, nan=0.0)  # Replace NaN with 0
rev_count = np.nan_to_num(rev_count, nan=0.0)             # Replace NaN with 0

results = fast_calculations.calculate(torque_smoothed, rev_count, exponents)
print(results)
