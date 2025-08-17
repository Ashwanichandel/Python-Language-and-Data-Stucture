def moveZeroToEnd(l):
    n=len(l)
    j=0
    for i in range(n):
        if l[i]!=0:
            l[j]=l[i]
            j+=1
    while j<n:
        l[j]=0
        j+=1
    return l    

arr = [1, 1, 0, 2, 2, 0, 3, 0, 3, 0, 3]
print(moveZeroToEnd(arr))