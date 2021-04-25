# contactus/tests.py
from django.test import TestCase

from .models import Contact


class ContactTests(TestCase):

    @classmethod
    def setUpTestData(cls):
        # Create a blog post
        test_post = Contact.objects.create(
            name='testuser1', email='testemail@email.com', messageinput='Sending a test message')
        test_post.save()

    def test_blog_content(self):
        post = Contact.objects.get(id=1)
        expected_name = f'{post.name}'
        expected_email = f'{post.email}'
        expected_messageinput = f'{post.messageinput}'
        self.assertEqual(expected_name, 'testuser1')
        self.assertEqual(expected_email, 'testemail@email.com')
        self.assertEqual(expected_messageinput, 'Sending a test message')
