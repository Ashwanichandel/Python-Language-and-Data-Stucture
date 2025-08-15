def checkListISSortedOrNot(l):
    i=1
    while i<len(l):
        if l[i]<l[i-1]:
            return False
        i=i+1
    return True


def usingSortedMethod(l):
    sl=sorted(l)
    if sl==l:
        return True
    else:
        return False

 

l=[20,30,34,40]
# if checkListISSortedOrNot(l):
#     print("True")
# else:
#     print("False")    

if usingSortedMethod(l):
    print("true")
else:
    print("false")
        