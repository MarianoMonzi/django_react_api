from django.db import models

# Create your models here.
class Farm(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    tree = models.CharField(max_length=200, default='Without Tree')
    average_cost = models.DecimalField(max_digits=200, decimal_places=1, default=0)
    average_revenue = models.DecimalField(max_digits=200, decimal_places=1, default=0)
    average_profit_per_hour = models.DecimalField(max_digits=200, decimal_places=1, default=0)
    
    def __str__(self):
        return self.title
    