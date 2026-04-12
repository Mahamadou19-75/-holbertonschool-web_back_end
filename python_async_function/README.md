# Git Intro Project

┬──────────────────────────────────────────────────────────────────────────────────────────────
       │ File: 0-basic_async_syntax.py
───────┼──────────────────────────────────────────────────────────────────────────────────────────────
   1   │ #!/usr/bin/env python3
   2   │ """Basic async coroutine"""
   3   │
   4   │ import asyncio
   5   │ import random
   6   │
   7   │
   8   │ async def wait_random(max_delay: int = 10) -> float:
   9   │     """Wait for a random delay and return it"""
  10   │     delay = random.uniform(0, max_delay)
  11   │     await asyncio.sleep(delay)
  12   │     return delay
───────┴──────────────────────────────────────────────────────────────────────────────────────────────
───────┬──────────────────────────────────────────────────────────────────────────────────────────────
       │ File: 1-concurrent_coroutines.py
───────┼──────────────────────────────────────────────────────────────────────────────────────────────
   1   │ #!/usr/bin/env python3
   2   │ """Execute multiple coroutines concurrently"""
   3   │
   4   │ import asyncio
   5   │ from typing import List
   6   │ wait_random = __import__('0-basic_async_syntax').wait_random
   7   │
   8   │
   9   │ async def wait_n(n: int, max_delay: int) -> List[float]:
  10   │     """Spawn wait_random n times and return sorted delays"""
  11   │     tasks = [wait_random(max_delay) for _ in range(n)]
  12   │     results = []
  13   │
  14   │     for task in asyncio.as_completed(tasks):
  15   │         result = await task
  16   │         results.append(result)
  17   │
  18   │     return results
───────┴──────────────────────────────────────────────────────────────────────────────────────────────
───────┬──────────────────────────────────────────────────────────────────────────────────────────────
       │ File: 2-measure_runtime.py
───────┼──────────────────────────────────────────────────────────────────────────────────────────────
   1   │ #!/usr/bin/env python3
   2   │ """Measure runtime of async execution"""
   3   │
   4   │ import time
   5   │ import asyncio
   6   │ wait_n = __import__('1-concurrent_coroutines').wait_n
   7   │
   8   │
   9   │ def measure_time(n: int, max_delay: int) -> float: