#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
from typing import List, Dict


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexé (clé = index)"""
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """
        Pagination résistante à la suppression
        """

        dataset = self.indexed_dataset()

        # Valeur par défaut
        if index is None:
            index = 0

        # Vérification
        assert isinstance(index, int) and index >= 0 and index < len(dataset)

        data = []
        current_index = index
        collected = 0

        # On récupère page_size éléments VALIDE même s'il y a des trous
        while collected < page_size and current_index < max(dataset.keys()) + 1:
            if current_index in dataset:
                data.append(dataset[current_index])
                collected += 1
            current_index += 1

        return {
            "index": index,
            "data": data,
            "page_size": len(data),
            "next_index": current_index
        }
 