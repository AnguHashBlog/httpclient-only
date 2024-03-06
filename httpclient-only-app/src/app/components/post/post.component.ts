import { Component, OnInit } from '@angular/core';
import { ApiResponseSinglePost, BlogPostWithContentAndAuthor } from '../../models/blog-data';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

const singlePostQuery = `
query ($slug: String!) {
  publication(host: "hashnode.anguhashblog.com") {
    post(slug: $slug) {
      title
      brief
      publishedAt
      author {
        name
        profilePicture
      }
      content {
        html
      }
      coverImage {
        url
      }
    }
  }
}
`;

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit {
  post: BlogPostWithContentAndAuthor = {} as BlogPostWithContentAndAuthor

  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const snapshot: ActivatedRouteSnapshot = this.route.snapshot;
    const slug = snapshot.params['slug'];

    const request = this.httpClient.post<ApiResponseSinglePost>(
      'https://gql.hashnode.com',
      {
        query: singlePostQuery,
        variables: {
          slug: slug
        }
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      },
    );

    request.subscribe((response) => {
      this.post = response.data.publication.post;
    });
  }
}
