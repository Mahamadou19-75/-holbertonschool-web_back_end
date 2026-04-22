#!/usr/bin/env python3
"""Pagination simple"""

import csv
from typing import List, Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """Retourne les index de début et de fin"""
    start = (page - 1) * page_size
    end = page * page_size
    return (start, end)


class Server:
    """Classe Server pour paginer une base de données de prénoms."""

    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Charge et met en cache le dataset"""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            # On enlève l’en-tête
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Retourne une page de résultats selon page et page_size
        """

        # Vérifications
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        # Récupérer les index
        start, end = index_range(page, page_size)

        # Dataset
        data = self.dataset()

        # Si hors limite → liste vide
        if start >= len(data):
            return []

        # Retourner la bonne tranche
        return data[start:end]
    