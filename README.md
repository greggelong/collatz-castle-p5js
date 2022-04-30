## Collatz Castle Text Adventure


a text adventure made from the maze that is the Collatz conjecture 

It is a work in progress at the moment.

You are randomly placed in somewhere along the tree of the Collatz numbers

you must use 3n + 1 to find your way back to room 1 which is the exit

or pick up items in other numbered rooms. 

But it is not so easy as room numbers  that would be adjacent on the regular number 

line like 27 and 26 are very far from each other using 3n+1.

[see a map by Jason Davies](https://www.jasondavies.com/collatz-graph/)

I got the idea from a Douglas Hofstadter lecture where he was counting

Collatz numbers to see how to get from one number to another.

[video here](https://youtu.be/V9ohtKameio?t=1539)

At the moment I have listed the path of rooms to return to room 1, which means you don’t need to do
The calculation.
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

 
