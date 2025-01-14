import dwdatareader as dw
import json

# Load target dewesoft file channel list
def loadChannelList(file):
    try:
        with dw.open(file) as dataFile:
            channelList = [channel for channel in dataFile
                        if not 'CAN' in dataFile[channel].channel_index]
        return channelList

    except ValueError:
        pass

# Open testFile.json and load into variables
with open('testFile.json', 'r') as file:
    data = json.load(file)
    fileName = data["fileName"]

# Run loadChannelList function on target file
channelList = loadChannelList(fileName)

# Convert channel list into JSON
# File name is channelList.json
with open("channelList.json", "w") as final:
	json.dump(channelList, final)