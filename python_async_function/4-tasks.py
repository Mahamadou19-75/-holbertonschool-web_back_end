#!/usr/bin/env python3
"""Using tasks instead of coroutines"""

import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Spawn tasks and return sorted delays"""
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    results = []

    for task in asyncio.as_completed(tasks):
        result = await task
        results.append(result)

    return results