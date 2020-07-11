#!/usr/bin/env node

process.stdout.write("Input your message,it will echo back.\n> ");
process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
    process.stdout.write("Return: " + data.toString().trim() +
        "\n");
    process.exit(0)
})