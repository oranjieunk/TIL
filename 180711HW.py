import random
list = [1,2,3,4,5]
list_check = [0,0,0,0,0]
num = len(list)
result = [ ]
while len(result) != len(list) :
  i = random.randrange(0,num)
  if list_check[i] == 0 :
    list_check[i] = 1
    result.append(list[i])

print(result)