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


# Unit tests

1.1 Display Game Board
2.1 Capture square selection
2.2 Check for Game Over (contains a bomb)
2.3 Check for game over (doesn't contain a bomb)
3.1 Display square value
3.2 Display unit test messages



