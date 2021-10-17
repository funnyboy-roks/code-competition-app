line = input()

lines = line.split()

out = "";

for l in lines:
    out += l[::-1] + " "

print(out.strip())