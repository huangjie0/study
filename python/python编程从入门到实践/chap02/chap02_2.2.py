#!/usr/bin/env python3
# -*- coding: utf-8 -*-

################################################################################
#
# 2.1 运行hello_world.py时发生的情况
#
################################################################################

def hello():
    message = "Hello Python world!"
    print(message)
    message = "Hello Python Crash world!"
    print(message)

if __name__=='__main__':
    hello()