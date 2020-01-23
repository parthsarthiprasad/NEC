# Importing Necessary Libraries
import numpy as np
import cv2
import json
import time
from tensorflow.keras.applications.vgg16 import VGG16
from tensorflow.keras.applications.resnet50 import ResNet50
from tensorflow.keras.models import load_model
import os

# Defining Predictor Class
class Classifier:
    def __init__(self,base_model,class_model,class_list):
        if base_model=="VGG16":
            self.base_model = VGG16(weights='imagenet', include_top=False, input_shape=(160,120,3))
        elif base_model=="ResNet":
            self.base_model =  ResNet50(weights='imagenet', include_top=False, input_shape=(160,120,3))
        else:
            print("Error: Base Model Not Defied")
        self.class_model=load_model("F:/Projects/Computer-Vision-with-Python/My Projects/UAV/Threat Level Classifier/Models/"+class_model)
        self.class_list=class_list
        print("Classifier Online")
        
    def classify(self,vid_name):
        print("Starting Video Capture")
        cap = cv2.VideoCapture(vid_name)
        
#        Checking Empty Video
        
        frameCount = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
        if(frameCount==0):
            print("Empty Video")
            return [-1]
        
        X = np.empty((int(frameCount/2), 160, 120, 3), np.dtype('uint8'))
        fc = 0
        ret = True
        
#       Frame Extraction Initiated
        count=0
        while (count < 2*int(frameCount/2)  and ret):
            ret, frame = cap.read()
            if(count%2==0):
                count+=1
                continue
            frame=cv2.resize(frame,(120,160))
            X[fc]=frame
            fc += 1
            count+=1
            # cv2.imshow("Frame",frame)
            # cv2.waitKey(20)
        cap.release()
        # cv2.destroyAllWindows()
        
#        Frame Extraction Complete, Starting Prediction 
        x_features = self.base_model.predict(X)
        x_features = x_features.reshape(x_features.shape[0],
                     x_features.shape[1] * x_features.shape[2],
                     x_features.shape[3])
        pred = self.class_model.predict(x_features)
        
#        Display Output
        cap1=cv2.VideoCapture(vid_name)
        frameCount = int(cap1.get(cv2.CAP_PROP_FRAME_COUNT))
        frame_H=int(cap1.get(cv2.CAP_PROP_FRAME_HEIGHT))
        frame_W=int(cap1.get(cv2.CAP_PROP_FRAME_WIDTH))
        # out = cv2.VideoWriter('outpy.avi',cv2.VideoWriter_fourcc('M','J','P','G'), 10, (frame_W,frame_H))
        print("Got Pred")
        print(frameCount)
        count = 0
        fc = 0
        ret = True
        while (fc < int(frameCount/2)  and ret):
            ret, frame = cap1.read()
            if(count%2==0):
                count+=1
                continue
            if(ret!=True):
                break
            text="Normal "
            prediction=pred[fc][0]-pred[fc][1]
            if(pred[fc][0]<pred[fc][1]):
                text="Anomaly "
                prediction=pred[fc][1]-pred[fc][0]
            frame=cv2.putText(frame,text+str(prediction),(0,int(frame_H/2)),cv2.FONT_HERSHEY_SIMPLEX, 1.0, (0,0,255))
            # out.write(frame)
            cv2.imshow("Frame",frame)
            c=cv2.waitKey(20)
            if c==27:
                break
            fc += 1
            count += 1
        cap.release()
        cv2.destroyAllWindows()
        # out.release()
        
#        Returning Output
        return pred    

# Setting Up Model
Model=Classifier("VGG16",'Alt_4_ResNet.h5',['Anomaly','Normal'])

i=0
#vid_name=sys.argv[0]
mem_loc = "F:/Projects/Computer-Vision-with-Python/My Projects/UAV/Threat Level Classifier"
vid_name= []
while True:
    # Predicting on Video
    new_file = os.listdir(mem_loc+"/Videos")
    for vid_item in new_file:
        if(vid_item in vid_name):
            continue
        else:
            pred=Model.classify(mem_loc + "/" + vid_name)
            if(len(pred)==1):
                continue
            time_data = []
            for j in range(len(pred)):
                time_data.append(int(vid_item.split("."))+int(j/10)-1)
            data = {"Anomaly":pred[0],"Normal":pred[1],"Time":time_data}
            with open(mem_loc+"/"+"Prediction","w") as f:
                json.dump(data,f)
            vid_name.append(vid_item)
    