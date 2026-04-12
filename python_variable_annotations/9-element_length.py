#!/usr/bin/env python3
"""Module that contains a function to return elements with their lengths."""

from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Returns a list of tuples with elements and their lengths."""
    return [(i, len(i)) for i in lst]