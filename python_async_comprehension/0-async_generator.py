#!/usr/bin/env python3
"""Module async_generator"""

import asyncio
import random


async def async_generator():
    """Génère 10 nombres aléatoires entre 0 et 10"""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)