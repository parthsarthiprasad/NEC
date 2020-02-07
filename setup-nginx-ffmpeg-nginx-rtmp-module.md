This document is setup development enviroment on MacOs. For other Linux such at Ubuntu cloud server we will do later on Deployment task.


## Install Node.js

We need nodejs for development and run backend resful service , websocket server so to instlal Node.js just download this package from offical website https://nodejs.org/en/download/

+ for linux sudo apt-get install nodejs

## Install MongoDB 
This tutorial we are using Mongodb NoSQL database store document for our Node.js app. To instlal MongoDB just download https://www.mongodb.com/download-center?jmp=nav#community 
or use Home brew https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

+ for linux sudo apt-get install mongod 

## Install Nginx + Nginx Rtmp Module (MacOs)
We use home brew to install package if you dont have Home brew just see documentation to install home brew on your MacOs https://brew.sh/ 

```
brew tap homebrew/nginx
```

```
brew options nginx-full

```

```
brew info nginx-full

```

```
brew install nginx-full --with-rtmp-module --with-debug

```

Nginx config file for default in ``` /usr/local/etc/nginx/nginx.conf ```
Start Nginx
```
nginx
```
Stop Nginx
```
nginx -s stop
```
Reload Nginx
```
nginx -s reload
```
## Nginx rtmp module on linux
```
sudo apt install libnginx-mod-rtmp
```
## Setup ffmpeg on MacOs 
FFMPEG that is awesome and free tools for video converting, streaming, we will use this tool for stream video from a camera (on Raspberry Pi Zero W) and send stream video from camera to our Server or Youtube. 
for development we use it on Mac for testing and just stream a video source from a input movie .mkv format.
We can download and install package directly from official website https://www.ffmpeg.org/download.html
or use Home brew to install it on MacOs.
```
brew install ffmpeg
```
Or Install with extra resources (Plugins)

```
brew install ffmpeg --with-tools --with-fdk-aac --with-freetype --with-fontconfig --with-libass --with-libvorbis --with-libvpx --with-opus --with-x265

```
Update Ffmpeg to latest version
```
brew update && brew upgrade ffmpeg
```

Documentation for list all inputs videos/audios https://www.ffmpeg.org/ffmpeg-devices.html 
On MacOs 
```
ffmpeg -f avfoundation -list_devices true -i ""

```
Stream Camera on MacOs + Audio to rtmp server ,remember change frame rate correctly in it:  -r 30
```
ffmpeg -f avfoundation -r 30 -i "0:0" -deinterlace -vcodec libx264 -pix_fmt yuv420p -preset medium -g 60 -b:v 2500k -acodec libmp3lame -ar 44100 -threads 6 -qscale 3 -b:a 712000 -bufsize 512k -f flv rtmp://localhost/live/parthsarthiprasad

```
Stream a movie (video.mkv) to Nginx Rtmp Server eg: rtmp://localhost/live/parthsarthiprasad
```
ffmpeg -re -i video.mkv -c:v libx264 -preset veryfast -maxrate 3000k -bufsize 6000k -pix_fmt yuv420p -g 50 -c:a aac -b:a 160k -ac 2 -ar 44100 -f flv rtmp://localhost/live/parthsarthiprasad

```

## Setup ffmpeg on linux

```
sudo apt-get install ffmpeg
sudo snap install ffmpeg
```
sudo apt-get install v4l2

Documentation for list all inputs videos/audios https://www.ffmpeg.org/ffmpeg-devices.html 
On MacOs 
```
ffmpeg -f v4l2 -list_devices true -i ""

```
Stream Camera on linux + Audio to rtmp server ,remember change frame rate correctly in my linux it:  -r 30
```
ffmpeg -f v4l2 -r 30 -i /dev/video0 -deinterlace -vcodec libx264 -pix_fmt yuv420p -preset medium -g 60 -b:v 2500k -acodec libmp3lame -ar 44100 -threads 6 -qscale 3 -b:a 712000 -bufsize 512k -f flv rtmp://localhost/live/parthsarthiprasad

```
Stream a movie (video.mkv) to Nginx Rtmp Server eg: rtmp://localhost/live/parthsarthiprasad
```
ffmpeg -re -i video.mkv -c:v libx264 -preset veryfast -maxrate 3000k -bufsize 6000k -pix_fmt yuv420p -g 50 -c:a aac -b:a 160k -ac 2 -ar 44100 -f flv rtmp://localhost/live/parthsarthiprasad

```



## Nginx Config Sample for Nginx + Nginx Rtmp Module
  check nginx.conf file