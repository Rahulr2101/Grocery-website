# Generated by Django 4.2 on 2023-04-11 18:07

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('weight', models.TextField()),
                ('fastDelivery', models.TextField()),
                ('image', models.ImageField(upload_to='images/')),
            ],
        ),
    ]
