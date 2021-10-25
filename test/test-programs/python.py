string = input()

out = '';
for s in string.split(' '):
    # reverse st
    out += s[::-1] + ' '

print(out.strip())