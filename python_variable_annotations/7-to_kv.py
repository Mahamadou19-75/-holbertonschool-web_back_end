#!/usr/bin/env python3
"""Module that contains a function to return a key-value tuple."""

from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Returns a tuple with a string and the square of a number as a float."""
    return (k, float(v ** 2))