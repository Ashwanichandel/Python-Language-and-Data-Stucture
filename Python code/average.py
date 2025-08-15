def average(l):
    sum=0
    for x in l:
        sum=sum+x
        n=len(l)
    return sum/n    

l=[10,20,30,40,50]
print(average(l))

def returnOddEvenList(l):
    even=[]
    odd=[]
    for x in l:
        if x%2==0:
            even.append(x)
        else:
            odd.append(x)
    return odd,even
         

l=[12,13,14,15,16,17]
odd,even=returnOddEvenList(l)
print(odd)
print(even)   
print("=======") 

def smaller_Element(l,n):
    res=[]
    for x in l:
        if x<n:
            res.append(x)
    return res
 
l=[1,2,3,4,5,6]
x=4
print(smaller_Element(l,x))
print("=====")
print(l[:4])
print("=======")
print(l[2:])
print(l[0:5:2])

