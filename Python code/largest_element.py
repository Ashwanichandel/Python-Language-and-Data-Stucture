def largesElement(l):
    if not l:
       return None
    max_val=l[0]
    for x in l:
        for y in l:
            if x>max_val:
             max_val=x
    return max_val
      

l=[10,20,30,40]
print(largesElement(l))
        