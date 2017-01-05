/**
 * Created by vincebloise on 12/22/16.
 */
import {Component, Input} from '@angular/core';
import {Product} from '../../services/product-service';
import StarsComponent from '../stars/stars';

@Component({
    selector: 'auction-product-item',
    styleUrls: ['app/components/product-item/product-item.css'],
    templateUrl: 'app/components/product-item/product-item.html',
})
export default class ProductItemComponent {
    @Input() product: Product;
}