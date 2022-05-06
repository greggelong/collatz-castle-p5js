## Collatz Castle Text Adventure


a text adventure made from the maze that is the Collatz conjecture 

It is a work in progress at the moment.

You are randomly placed in somewhere along the tree of the Collatz numbers.

Your first task is to use use 3n + 1 to find your way back to room 1.

This first task can be completed by following a simple rule:

* if your current room is even choose the door that is half that number

* if the current room is odd choose the door that is triple that number plus one

The second task is to pick up an item in room three.  

but how do you get from room one to room three?

It is not so easy. The room numbers are not adjacent  as on the regular number 

line.  Rooms 3 and 4 are not next to one another. If you need help use a map.

[see a map by Jason Davies](https://www.jasondavies.com/collatz-graph/)

I got the idea from a Douglas Hofstadter lecture where he was counting

Collatz numbers to see how to get from one number to another.

[video here](https://youtu.be/V9ohtKameio?t=1539)

At the moment I have listed the path of rooms to return to room 1, which means you don’t need to do

I need to make a better explanation of the play.

I am using modulo to place objects in the rooms


see it live at: 

[live here](https://greggelong.github.io/collatz-castle-p5js/cc)

see the code at:

[code here](https://github.com/greggelong/collatz-castle-p5js/)


first made in Python see the code at 

[the python code](https://github.com/greggelong/collatz-castle)

The algorithm for finding neighbors works like this in Python

```python
def collatzNeighbors(num):
    ''' get the collatz neighbors of a number
        return as a immutable tuple'''
    if num%2 ==0:
        # form 3np1 factor
        if (num-1)%3 == 0:       
            #print(num, (num-1)/3, "or", num*2, "or" ,num/2 )
            return ((num-1)/3, num*2, num/2)
        else:
        # not 3np1 factor
            #print(num, "not 3np1", num*2 , "or",num/2)
            return (num*2, num/2)
    else:
        # cant divide by two as its odd so 3np1 and mult by 2
        #print( num, "is odd so 3np1" , num*3+1, "or", num*2)
        return (num*3+1, num*2)
    



````


an earlier version is on replit where it was created

 
 as this is a retro game I am making a version for the Commodore 64
 
 and as Commodore BASIC does not have a built in mod() function
 
 I am using the 
 
 ``` BASIC
 
 a-int(a/b)*b
 
 ```
 [see this discussion](https://retrocomputing.stackexchange.com/questions/9438/how-can-i-implement-the-modulus-operator-in-commodore-64-basic)
 
 Here is the neighbors function in Commodore BASIC
 
 ```BASIC
 
 5 print"S"
10 print"collatz neighbors"
20 input"your room";a
30 rem check if the room is mod 2
40 if a - int(a/2)*2 = 0 then 100
50 rem not even
55 rem odd rooms only have 2 doors
60 print "room is odd, only 2 doors"
70 print"room 1:", a*3+1
80 print"room 2:", a*2
90 end
100 rem checking if even room -1 mod3
110 if(a -1) - int((a-1)/3)*3 =0 then 20
0
120 rem not 3 n +1 factor only 2 rooms
130 print"room 1", a*2
140 print"room 2", a/2
150 end
200 rem is 3n+1 factor 3 rooms
210 print"room 1:", (a-1)/3
220 print"room 2:", a*2
230 print"room 3:", a/2
250 end


 
 
 ```

you can copy and paste into vice c64 I will create another repo with a c64 disk image
