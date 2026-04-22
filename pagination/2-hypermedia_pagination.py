#!/usr/bin/env python3
"""Pagination avec hypermedia"""

import csv
import math
from typing import List, Tuple, Dict


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """Retourne les index de début et de fin"""
    start = (page - 1) * page_size
    end = page * page_size
    return (start, end)


class Server:
    """Classe Server pour paginer une base de données."""

    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Charge et met en cache le dataset"""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Retourne une page de données"""
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        start, end = index_range(page, page_size)
        data = self.dataset()

        if start >= len(data):
            return []

        return data[start:end]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict:
        """
        Retourne les infos de pagination (hypermedia)
        """

        # Dataset complet
        data = self.dataset()
        total_items = len(data)

        # Total pages (arrondi au supérieur)
        total_pages = math.ceil(total_items / page_size)

        # Page actuelle (réutilisation)
        page_data = self.get_page(page, page_size)

        # Taille réelle de la page
        page_size_actual = len(page_data)

        # Next page
        next_page = page + 1 if (page * page_size) < total_items else None

        # Previous page
        prev_page = page - 1 if page > 1 else None

        return {
            "page_size": page_size_actual,
            "page": page,
            "data": page_data,
            "next_page": next_page,
            "prev_page": prev_page,
            "total_pages": total_pages,
        }
