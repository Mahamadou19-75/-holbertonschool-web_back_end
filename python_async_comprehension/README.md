# Git Intro Project

──┬──────────────────────────────────────────────────────────────────────────────────────────────
       │ File: 0-async_generator.py
───────┼──────────────────────────────────────────────────────────────────────────────────────────────
   1   │ #!/usr/bin/env python3
   2   │ """Async Generator"""
   3   │
   4   │ import asyncio
   5   │ import random
   6   │
   7   │
   8   │ async def async_generator():
   9   │     """Yield 10 random numbers between 0 and 10"""
  10   │     for _ in range(10):
  11   │         await asyncio.sleep(1)
  12   │         yield random.uniform(0, 10)
───────┴──────────────────────────────────────────────────────────────────────────────────────────────
───────┬──────────────────────────────────────────────────────────────────────────────────────────────
       │ File: 1-async_comprehension.py
───────┼──────────────────────────────────────────────────────────────────────────────────────────────
   1   │ #!/usr/bin/env python3
   2   │ """Async Comprehension"""
   3   │
   4 + │ from typing import List
   5   │ async_generator = __import__('0-async_generator').async_generator
   6   │
   7   │
   8 ~ │ async def async_comprehension() -> List[float]:
   9   │     """Return 10 random numbers"""
  10   │     return [i async for i in async_generator()]
───────┴──────────────────────────────────────────────────────────────────────────────────────────────
───────┬──────────────────────────────────────────────────────────────────────────────────────────────
       │ File: 2-measure_runtime.py
───────┼──────────────────────────────────────────────────────────────────────────────────────────────
   1   │ #!/usr/bin/env python3
   2   │ """Measure runtime"""
   3   │
   4   │ import asyncio
   5   │ import time
   6 + │ from typing import List
   7   │
   8   │ async_comprehension = __import__('1-async_comprehension').async_comprehension
   9   │
  10   │
  11 ~ │ async def measure_runtime() -> float:
  12   │     """Execute async_comprehension 4 times in parallel"""
  13 ~ │     start = time.perf_counter()
  14   │
  15   │     await asyncio.gather(
  16   │         async_comprehension(),
  17   │         async_comprehension(),