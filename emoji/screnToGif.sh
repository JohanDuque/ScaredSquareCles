#!/bin/bash

## sleep in bash for loop ##
#for i in {1..10}
for i in $(seq -f "%03g" 31 100)
do
  SECONDS=0

  rm -rf output.mkv;
  rm -rf frames;
  mkdir frames;
  sleep 2;
  ffmpeg -y -t 5 -video_size 671x671 -framerate 20 -f avfoundation -i "1" -vf "crop=1020:1340:200:300" output.mkv;
  ffmpeg -i output.mkv -t 5 frames/ffout%03d.png;
  convert "frames/ffout*.png" gifs/ScaredSquareCle#$i.gif;
  
  
  echo $SECONDS seconds
  #sleep 5s
done


#ffplay output.mkv

ffmpeg -y -t 5 -video_size 671x671 -framerate 20 -f avfoundation -i "1" -vf "crop=1030:1300:160:280" output.mkv; ffplay output.mkv;