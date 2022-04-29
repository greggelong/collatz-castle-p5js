## Collatz Castle Text Adventure

a text adventure made from the maze that is the Collatz conjecture 

It is a work in progress at the moment.

You are randomly placed in somewhere along the tree of the Collatz numbers

you must use 3n + 1 to find your way back to 1.

I got the idea from a Douglas Hofstadter lecture where he was counting

the Collatz to see how to get from one number to another.

At the moment I have listed the path of rooms to return to room 1, which means you don’t need to do
The calculation.
I need to make a better explanation of the play.

I am using modulo to place objects in the rooms


see it live at 

[on github](https://greggelong.github.io/collatz-castle-p5js/cc)


first made in Python see the code at 

https://github.com/greggelong/collatz-castle

The algorithm for fiding neighbors works like this in Python

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

 
