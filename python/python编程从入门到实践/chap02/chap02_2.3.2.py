#!/usr/bin/env python3
# -*- coding: utf-8 -*-

################################################################################
#
# 2.3.2 在字符串中使用变量
#
################################################################################

def name():
    """在字符串中使用变量"""
    first_name = "ada"
    last_name = "lovelace"
    full_name = f"{first_name} {last_name}"
    print(full_name)
    message = f"Hello,{full_name.title()}"
    print(message)

if __name__=='__main__':
    name()