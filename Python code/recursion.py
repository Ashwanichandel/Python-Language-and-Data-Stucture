def fun1():
    print("Ashwani")
    fun1()

def fun2(n):
    if n==0:
        return
    print(n)
    fun2(n-1)
    print(n)

    

def fun3(n):
    if n==0:
        return
    fun3(n-1)
    print(n)
    fun3(n-1)

def fun4(n):
    if n<=1:
        return 0
    else:
        return 1+fun4(n/2)
    
  


def fun5(n):
    if n==0:
        return
    fun5(n//2)
    print(n%2)

fun5(13)  