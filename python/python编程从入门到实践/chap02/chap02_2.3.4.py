#!/usr/bin/env python3
# -*- coding: utf-8 -*-

################################################################################
#
# 2.3.4 删除空白
#
################################################################################

def language():
    """删除空白"""
    favorite_language = '     python        '
    favorite_language1 = favorite_language.rstrip()
    favorite_language2 = favorite_language.lstrip()
    print(favorite_language)

if __name__=='__main__':
    language()