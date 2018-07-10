/* 
Information on videos, other objects used in collagebase.html
You need to produce 3 video files for each video, type mp4,ogg,webm, with names as indicated in the videoinfo array. 
The first element of each subarray indicates the type of object, that is, 'video', 'heart', 'picture', 'oval','rectangle'.
The elements for video objects are
"video", basename of video files, angle in radians, source x, source y, destination on canvas x, destination y, width, height, scale factor (x and y), volume level (0 to 1)
The angle can be used to change the orientation for clips shot on iPhone or iPads.
The source x and y, with the width and height, allows you to use only some of the source video.

The elements for 'picture' are
'picture',x,y,w,h,imagename.

The elements for heart are
'heart',x,y,h,drx,color

The elements for oval are
'oval',x,y,r,horizontal scaling, vertical scaling, color

The elements for rectangle are
'rect',x,y, w,h,color

The element for video are
'video',videoname, angle, sourcex, sourcey, x, y, width, height, scale, volume
Note: the width and height are before scaling.

*/

var mediainfo=
[
['heart', 300,40,100,30,'red'],

['rect',620,400,100,150,"purple"],

['oval',600,50,30,2,1,'green'],

['oval',80, 500, 30, 2, 1, 'blue'],

['video','monkeyMar18',0,0,0,1000,800,896,1198,.25,1],

['picture',5,150, 150  , 200  ,'danielAndAnnika.jpg'],

['picture',500,150,280,210,'threePlusDog.jpg']


];



