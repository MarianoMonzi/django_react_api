# Generated by Django 4.2 on 2023-04-24 22:33

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Farm',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('description', models.TextField(blank=True)),
                ('tree', models.CharField(default='Without Tree', max_length=200)),
                ('average_cost', models.DecimalField(decimal_places=2, default=0, max_digits=200)),
                ('average_revenue', models.DecimalField(decimal_places=2, default=0, max_digits=200)),
                ('average_profit_per_hour', models.DecimalField(decimal_places=2, default=0, max_digits=200)),
            ],
        ),
    ]
