def indexSearch(l,x):
    n=len(l)
    for i in range(n):
        if(l[i]==x):
            return i
    return -1;    

arr = [10, 20, 30, 40, 50]

print(indexSearch(arr, 30))  # 2
print(indexSearch(arr, 60))