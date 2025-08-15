#l=["20,30,40,50"]
#answer should be like that [50,40,30,20,10]

def reverseList(l):
  new_list=list(reversed(l))
  print(new_list)

def reverseList1(l):
  start=0
  end=len(l)-1

  while start<end:
   l[start],l[end]=l[end],l[start]
   start+=1
   end-=1

def number(l):
  for i,_ in enumerate(l):
    l[i]*=2


l=[20,30,40,50]
number(l)
print(l) 
