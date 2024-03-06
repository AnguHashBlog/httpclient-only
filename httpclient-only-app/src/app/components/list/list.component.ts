import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponseBlogPosts, BlogPost } from '../../models/blog-data';

const postsQuery = `
query {
  publication(host: "hashnode.anguhashblog.com") {
    title
    posts(first: 10) {
      edges {
        node {
          slug
          title
          brief
          publishedAt
          coverImage {
            url
            photographer
          }
        }
      }
    }
  }
}
`;

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
  blogPosts: BlogPost[] = [];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    const request = this.httpClient.post<ApiResponseBlogPosts>(
      'https://gql.hashnode.com',
      {
        query: postsQuery
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      },
    );

    request.subscribe((response) => {
      this.blogPosts = response.data.publication.posts.edges.map(edge => edge.node);
    });
  }
}
