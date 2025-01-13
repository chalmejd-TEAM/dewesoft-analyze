from setuptools import setup, Extension
from pybind11.setup_helpers import Pybind11Extension

ext_modules = [
    Pybind11Extension("fast_calculations", ["fast_calculations.cpp"]),
]

setup(
    name="fast_calculations",
    ext_modules=ext_modules,
    zip_safe=False,
)
