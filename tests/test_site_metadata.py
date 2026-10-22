"""Static checks for the French renovation landing page's public metadata.

Run from repository root: python -m unittest discover -s tests -v
"""
from html.parser import HTMLParser
from pathlib import Path
import unittest


ROOT = Path(__file__).resolve().parents[1]


class MetadataParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.meta = []
        self.images = []

    def handle_starttag(self, tag, attrs):
        data = dict(attrs)
        if tag == "meta":
            self.meta.append(data)
        elif tag == "img":
            self.images.append(data)


class SiteMetadataTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.html = (ROOT / "index.html").read_text(encoding="utf-8-sig")
        cls.page = MetadataParser()
        cls.page.feed(cls.html)

    def test_document_language(self):
        self.assertIn('<html lang="fr">', self.html)

    def test_page_description(self):
        descriptions = [m.get("content", "") for m in self.page.meta if m.get("name") == "description"]
        self.assertEqual(len(descriptions), 1)
        self.assertGreater(len(descriptions[0].strip()), 30)

    def test_social_preview_image_has_alt(self):
        images = [m for m in self.page.meta if m.get("property") == "og:image"]
        alt = [m for m in self.page.meta if m.get("property") == "og:image:alt"]
        self.assertEqual(len(images), 1)
        self.assertEqual(len(alt), 1)
        self.assertTrue(alt[0].get("content", "").strip())

    def test_image_elements_have_alt_attributes(self):
        for image in self.page.images:
            with self.subTest(src=image.get("src")):
                self.assertIn("alt", image)


if __name__ == "__main__":
    unittest.main()
