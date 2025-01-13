import dwdatareader as dw
import tkinter.filedialog as filedialog
import numpy as np
import pandas
import fast_calculations

def loadFile():
    try:
        file = filedialog.askopenfilename()
        with dw.open(file) as dataFile:
            channelList = [channel for channel in dataFile
                        if not 'CAN' in dataFile[channel].channel_index]
            df = dataFile.dataframe(channelList)
        print(dataFile.info)
        return df


    except ValueError:
        pass

# torqueSelect = 'Combined Load'
# revCountSelect = 'CNT 1/Raw_Count'
df = loadFile()

load = df['Combined Load'].to_numpy()
revs = df['CNT 1/Raw_Count'].to_numpy()


# Example usage
torque_smoothed = np.array(load)  # Replace with your data
rev_count = np.array(revs)        # Replace with your data
exp_list = [3, 3.3, 6.61, 8.73]

torque_smoothed = np.nan_to_num(torque_smoothed, nan=0.0)  # Replace NaN with 0
rev_count = np.nan_to_num(rev_count, nan=0.0)             # Replace NaN with 0


results = fast_calculations.calculate(torque_smoothed, rev_count, exp_list)
print(results)
