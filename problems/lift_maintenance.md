### Problem

Write a code for maintaining the lifts of a given building.
Assume there are N lifts in a building of M floors.

Key Params:
```
Current Floor: The floor at which the lift is.
Starting Floor: The floor from which the request was made.
Destination Floor: The floor to which the lift must go.
State: The lift can either be open or closed.
```

Rules:

- All the lifts are at the ground floor at the start.
- If a lift is moving from 0th floor to the 5th floor, the lift will take 5 units of time to reach
the destination floor provided the current floor of the lift is 0.
- Lift will consume 1 unit to open to let the person in and 1 to let the person out.
- The input can be triggered at any given point in time.

Input:
```
N : No of lifts in a given building. (Eg:2)
M: No of floors in a building. (Eg: 10)
0 4
```
This signifies that the lift must travel from the 0th floor to the 4th floor.

7 3
This signifies that the lift must travel from the 7th floor to the 3rd floor.

Eg:

(L1,L2) ---> (0,0)
0 7
3 0

LIFT 1 will cater the first request in 9 units. (1 to open, 7 commute and 1 to open)
LIFT 2 will cater the second request in 8 units. ( 3 units to go to the 3rd floor, 1 to open, 3 to
return and 1 to open again)

Now, assume at time unit T=2, there is a request :
4 6
Lift 1 must be able to cater to this request as it is going in an upward direction.


### INPUT:

```
No of Lifts: 2
No of Floors: 10
L1=0,L2=0
0 0 7
0 3 0
2 4 6
```

### OUTPUT:
```
Mention the Current floor of all the lifts with the state.
T=0
LIFT 1 -- > 0 (OPEN), LIFT 2 ---> 0 (CLOSE)
T=1
LIFT 1 -- > 0 (CLOSE), LIFT 2 ---> 1 (CLOSE)
T=2
LIFT 1 -- > 1(CLOSE), LIFT 2 ---> 2 (CLOSE)
T=3
LIFT 1 -- > 2 (CLOSE), LIFT 2 ---> 3 (OPEN)
T=4
LIFT 1 -- > 3(CLOSE) , LIFT 2 ---> 3 (CLOSE)
T=5
LIFT 1 -- > 4(OPEN), LIFT 2 ---> 2(CLOSE)
T=6
LIFT 1 -- > 4(CLOSE), LIFT 2 ---> 1(CLOSE)
T=7
LIFT 1 -- >5(CLOSE), LIFT 2 ---> 0(OPEN)
T=8
LIFT 1 -- >6(OPEN), LIFT 2 ---> 0(CLOSE)
T=9
LIFT 1 -- >6 (CLOSE), LIFT 2 ---> 0(CLOSE)
T=10
LIFT 1 -- >7(OPEN), LIFT 2 ---> 0(CLOSE)
T=11
LIFT 1 OPENS
LIFT 1 -- >7(CLOSE), LIFT 2 ---> 0(CLOSE)
LIFT 1: 11 SECONDS
LIFT 2: 8 SECONDS
```
