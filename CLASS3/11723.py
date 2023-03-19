# 집합
import sys
m = int(input())

set = [0] * 20

for _ in range(m):
    ops = sys.stdin.readline().strip().split()
  
    if ops[0] == "add":
        if 0 <= int(ops[1])-1 <= 19:
            set[int(ops[1])-1] = 1
    
    elif ops[0] == "remove":
        if 0 <= int(ops[1])-1 <= 19:
            set[int(ops[1])-1] = 0

    elif ops[0] == "check":
        if 0 <= int(ops[1])-1 <= 19:
            print(set[int(ops[1])-1])
        else: 
            print(0)

    elif ops[0] == "toggle":
        if 0 <= int(ops[1])-1 <= 19:
            if set[int(ops[1])-1] == 1:
                set[int(ops[1])-1] = 0
            else: 
                set[int(ops[1])-1] = 1
    
    elif ops[0] == "all":
        for i in range(20):
            set[i] = 1

    elif ops[0] == "empty":
        for i in range(20):
            set[i] = 0