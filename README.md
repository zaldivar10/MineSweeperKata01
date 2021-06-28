# UAT Scenarios

1 – Game Board Creation phase:
+-+-+-+ 
| | | | 
+-+-+-+ 
| | | | 
+-+-+-+ 
| | | | 
+-+-+-+
[Sandbox 3x3] Game created

2 – Game Over - Step on a bomb on 1;1
+-+-+-+ 
| | | | 
+-+-+-+ 
| |X| | 
+-+-+-+ 
| | | | 
+-+-+-+
[Sandbox 3x3] BOOM! – Game Over.

3 – Clean square 0;0 and get the number of bombs around
+-+-+-+ 
| | | | 
+-+-+-+ 
| | | | 
+-+-+-+ 
|3| | | 
+-+-+-+
[Sandbox 3x3] 3 bombs around your square.

4 – Mark the bombs around – What I expect after I marked the 3 squares as bombs [1;0 + 1;1 + 0;1].
+-+-+-+ 
| | | | 
+-+-+-+ 
|*|*| | 
+-+-+-+ 
|3|*| | 
+-+-+-+
[Sandbox 3x3] Square flagged as bomb.

5 – Game Victory – After I cleared the all the squares [2;0 + 2;1 + 2;2 + 1;2 + 1;2]
+-+-+-+
|2|2|1|
+-+-+-+
|*|*|2|
+-+-+-+
|3|*|2|
+-+-+-+
[Sandbox 3x3] the land is cleared! GOOD JOB!


# Unit tests

1.1 Display Game Board
2.1 Capture square selection
2.2 Check for Game Over (contains a bomb)
2.3 Check for game over (doesn't contain a bomb)
3.1 Display square value (adding function only)
3.2 Display unit test messages (adding function only)
4.1 Display square selection (when marking bomb around)
5.1 Check for Victory


# Technical Debt and Open Items
TD1. Work on proper display of Game Board and message related to Square flagged as bomb
TD2. Add validation for valid input (square position, not repeated)


